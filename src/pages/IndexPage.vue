
<template>
  <q-page padding>
    <h1>{{ $t('app.title') }}</h1>
    <p>{{ $t('app.description') }}</p>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <h3>Card 1</h3>
            <p>Dashboard content goes here</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <h3>Card 2</h3>
            <p>More dashboard content</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// You can add page-specific logic here
</script>
