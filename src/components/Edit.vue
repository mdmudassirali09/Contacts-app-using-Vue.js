<template>
    <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-top">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Name</span>
                        <input type="text" class="form-control" v-model="editedName" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Phone</span>
                        <input type="text" class="form-control" v-model="editedPhone">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Email</span>
                        <input type="text" class="form-control" v-model="editedMail">
                    </div>
                    <button @click="upCon" data-bs-dismiss="modal" class="btn btn-primary">Edit</button>
                    <button data-bs-dismiss="modal" aria-label="Close" class="btn btn-light" style="margin: 6px">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id','name', 'phone', 'mail'],
    emits: ['update-contact'],
    data() {
        return{
            editedName: this.name,
            editedPhone: this.phone,
            editedMail: this.mail
        }
    },
    watch: {
        name() {
            this.editedName = this.name;
        },
        phone() {
            this.editedPhone = this.phone;
        },
        mail() {
            this.editedMail = this.mail;
        }
    },
    methods:{
        upCon() {
            this.$emit('update-contact', this.id, this.editedName, this.editedPhone, this.editedMail)
        },
    }
};
</script>