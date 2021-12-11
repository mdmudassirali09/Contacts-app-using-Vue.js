<template>
    <div class="modal fade" id="modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-lg modal-dialog-top">
            <div class="modal-content" style="width: 500px; margin-left: 154px; width: 520px;">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="text-align: center; font-size: 100px">
                        <i class="bi bi-person-fill"></i>
                        <h4>{{name}}</h4>
                    </div>
                    <div class="contact"><i class="bi bi-person-fill" style="padding: 9px;"></i>Name:&nbsp;{{name}}</div>
                    <div class="contact"><i class="bi bi-telephone-fill" style="padding: 9px;"></i>Phone:&nbsp;{{phone}}</div>
                    <div class="contact"><i class="bi bi-envelope-fill" style="padding: 9px;"></i>Email:&nbsp;{{mail}}</div>
                    <button type="button" data-bs-dismiss="modal" class="btn btn-light">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'phone', 'mail'],
    data() {
        return{
            show: false,
        }
    },
    methods:{
        showContact() {
            this.show = !this.show;
        },
        delContact() {
            this.$emit('del-con', this.id);
        }
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