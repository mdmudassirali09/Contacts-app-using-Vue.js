<template>
    <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-top">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New Contact</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Name</span>
                        <input type="text" class="form-control" v-model="newName">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Phone</span>
                        <input type="text" class="form-control" v-model="newPhone">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Email</span>
                        <input type="text" class="form-control" v-model="newMail">
                    </div>
                    <button @click="createCont" data-bs-dismiss="modal" class="btn btn-primary">Create</button>
                    <button data-bs-dismiss="modal" aria-label="Close" class="btn btn-light" style="margin: 6px">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['create-contact'],
        data() {
            return {
                newName: '',
                newPhone: '',
                newMail: ''
            }
        },
        methods: {
            createCont (){
                this.$emit('create-contact', this.newName, this.newPhone, this.newMail);
            }
        }
    }
</script>