<template>
    <div id="app">
        <div class="main">
            <ContactStatic></ContactStatic>
            <ContactMap></ContactMap>
            <ContactForm></ContactForm>
        </div>
    </div>
</template>

<script>
    import ContactForm from './components/Contacts/ContactForm'
    import ContactMap from './components/Contacts/ContactMap'
    import ContactStatic from './components/Contacts/ContactStatic'

    export default {
        name: 'app',
        components: {
            ContactStatic,
            ContactMap,
            ContactForm
        }
    }
</script>

<style>

</style>
