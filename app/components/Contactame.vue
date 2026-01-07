<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
const loading = ref(false)

const cooldownTime = ref(0)

const state = reactive({
  name: undefined as string | undefined,
  email: undefined as string | undefined,
  subject: undefined as string | undefined,
  message: undefined as string | undefined,
  _gotcha: ''
})

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors = []
  if (!state.name) errors.push({ name: 'name', message: 'El nombre es obligatorio' })
  if (!state.email) {
    errors.push({ name: 'email', message: 'El email es obligatorio' })
  } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
    errors.push({ name: 'email', message: 'Introduce un email válido' })
  }
  if (!state.message) errors.push({ name: 'message', message: 'Por favor escribe un mensaje' })
  else if (state.message.length < 10) errors.push({ name: 'message', message: 'El mensaje es muy corto' })

  return errors
}

function startCooldown() {
  cooldownTime.value = 30
  const interval = setInterval(() => {
    cooldownTime.value--
    if (cooldownTime.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (cooldownTime.value > 0) {
    toast.add({
      title: 'Espera un momento',
      description: `Por favor espera ${cooldownTime.value} segundos antes de enviar otro mensaje.`,
      color: 'warning',
      icon: 'i-heroicons-clock'
    })
    return
  }

  if (state._gotcha) {
    return
  }

  loading.value = true

  try {
    await $fetch('https://formspree.io/f/xaqnaedl', {
      method: 'POST',
      body: {
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message
      },
      headers: {
        Accept: 'application/json'
      }
    })

    toast.add({
      title: '¡Mensaje enviado!',
      description: 'Me pondré en contacto contigo pronto.',
      color: 'primary',
      icon: 'i-heroicons-check-circle'
    })

    state.name = undefined
    state.email = undefined
    state.subject = undefined
    state.message = undefined
    state._gotcha = ''

    startCooldown()
  } catch (error) {
    toast.add({
      title: 'Error',
      description: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-11/12 sm:w-11/12 md:w-11/12 lg:w-6xl xl:w-6xl h-full mx-auto py-10">
    <h2
      class="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-linear-to-r from-green-500 to-teal-600"
    >
      Contáctame
    </h2>

    <UPageCard
      title=""
      description=""
      icon=""
      spotlight
      class="w-full h-3/5 rounded-3xl xl:rounded-3xl lg:rounded-3xl md:rounded-2xl sm:rounded-none!"
    >
      <div
        class="flex items-center justify-center align-center pt-20 pb-20 md:pb-5 md:pt-5 xs:pb-10 xs:pt-10 lg:pb-20 lg:pt-20"
      >
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-4 w-full max-w-lg mx-auto"
          @submit="onSubmit"
        >
          <input
            v-model="state._gotcha"
            type="text"
            name="_gotcha"
            class="opacity-0 absolute -z-10 w-0 h-0"
            tabindex="-1"
            autocomplete="off"
          >

          <UFormField
            label="Nombre"
            name="name"
            class="w-full"
          >
            <UInput
              v-model="state.name"
              placeholder="Tu nombre"
              icon="i-lucide-user"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="Email"
            name="email"
            class="w-full"
          >
            <UInput
              v-model="state.email"
              placeholder="tucorreo@ejemplo.com"
              icon="i-lucide-mail"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="Asunto"
            name="subject"
            class="w-full"
          >
            <UInput
              v-model="state.subject"
              placeholder="Interés en colaborar..."
              icon="i-lucide-tag"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="Mensaje"
            name="message"
            class="w-full"
          >
            <UTextarea
              v-model="state.message"
              placeholder="Hola, me gustaría hablar sobre..."
              :rows="4"
              class="w-full"
            />
          </UFormField>

          <div class="pt-2">
            <UButton
              type="submit"
              block
              :loading="loading"
              :disabled="cooldownTime > 0"
              :icon="cooldownTime > 0 ? 'i-lucide-timer' : 'i-lucide-send'"
              :color="cooldownTime > 0 ? 'neutral' : 'primary'"
              variant="solid"
            >
              {{ cooldownTime > 0 ? `Espera ${cooldownTime}s para enviar otro` : 'Enviar Mensaje' }}
            </UButton>
          </div>
        </UForm>
      </div>
    </UPageCard>
  </div>
</template>
