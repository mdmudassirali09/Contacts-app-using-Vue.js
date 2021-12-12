<template>
    <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-top">
            <div class="modal-content" style="width: 500px; margin-left: 154px; width: 520px;">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="text-align: center; font-size: 100px">
                        <i class="bi bi-person-fill"></i>
                        <h4>{{editedName}}</h4>
                    </div>
                    <div class="contact">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-person-fill" style="padding: 9px;"></i>Name:</span>
                            <input type="text" class="form-control" v-model="editedName" >
                        </div>
                    </div>
                    <div class="contact">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-telephone-fill" style="padding: 9px;"></i>Phone:</span>
                            <input type="text" class="form-control" v-model="editedPhone" >
                        </div>
                    </div>
                    <div class="contact">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-envelope-fill" style="padding: 9px;"></i>Email:</span>
                            <input type="text" class="form-control" v-model="editedMail">
                        </div>
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

<style scoped>
    .contact {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        font-size: 20px;
        border-radius: 10px;
        margin: 18px;
        max-width: 450px;
    }
</style>