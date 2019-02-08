<template>
    <div class="contacts_form">
        <div class="row">
            <div class="left">
                <div class="title">Contact Us</div>
                <div class="form">
                    <div class="form_item">
                        <div class="form_flex">

                            <input type="text"
                                   id="name"
                                   v-validate="'required'"
                                   name="name"
                                   v-model="name">
                            <label for="name">Name</label>
                        </div>

                        <div v-if="getError('name')" class="error_message">Field must be filled</div>
                    </div>


                    <div class="form_item">
                        <div class="form_flex">

                            <input type="text"
                                   id="phone"
                                   v-validate="'required'"
                                   name="phone"
                                   v-model="phone">
                            <label for="phone">Phone</label>
                        </div>
                        <div v-if="getError('phone')" class="error_message">Field must be filled</div>
                    </div>


                    <div class="form_item">
                        <div class="form_flex">
                            <input type="text"
                                   id="email"
                                   name="email"
                                   v-validate="'required|email'"
                                   v-model="email">
                            <label for="email">E-mail</label>
                        </div>
                        <div v-if="getError('email')" class="error_message">Not valid data</div>
                    </div>


                    <div class="form_item">
                        <div class="form_flex last">
                            <input type="checkbox"

                                   id="police"
                                   name="police"
                                   v-model="police"
                                   v-validate="'required'"
                                   class="checkbox">
                            <label class="checkbox_label" for="police">
                                <span>I agree the processing of personal data</span>
                            </label>
                        </div>
                        <div v-if="getError('police')" class="error_message">Agree to the processing of personal data
                        </div>
                    </div>


                </div>
                <div class="btn">
                    <button class="send"
                            v-on:click="formSend()"
                            :disabled="disabledBtn"
                            v-bind:class="{disabled: disabledBtn}">Get in touch</button>
                </div>
            </div>
            <div class="right">
                Please tell us more about your request and give us info about your company and country
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../api/index'

    export default {
        name: "ContactForm",
        inject: ['$validator'],
        data() {
            return {
                name: '',
                phone: '',
                email: '',
                error: {
                    email: ''
                },
                police: false,
                activeInput: false,
                disabledBtn: false

            }
        },
        methods: {
            getError(field) {
                let result = '';
                this.errors.items.forEach(error => {
                    if (error.field == field) {
                        result = ('error_' + field)
                    }
                });
                return result;
            },

            formSend: function () {
                this.$validator.validateAll().then(result => {
                    if (!result) {

                        return false;

                    }
                    let params = {
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                        police: this.police
                    };

                    api.sendFormApi.send(params).then(response => {
                        this.disabledBtn = true
                        if (response.data.status == '200') {
                            console.log(response)
                        } else {
                            console.log(response)
                        }
                    })
                });
            }
        }
    }
</script>

<style scoped>
    .contacts_form {
        background-image: url("../../assets/images/pattern.png");
    }
</style>