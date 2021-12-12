<template>
    <div class="modal fade" id="modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-lg modal-dialog-top">
            <div class="modal-content" style="width: 500px; margin-left: 154px; width: 520px;">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="float: right; margin: 12px;">
                        <a @click="upData()" data-bs-toggle="modal" data-bs-target="#modal2"><i class="bi bi-pencil-square" ></i></a>
                    </div>
                    <div style="text-align: center; font-size: 100px;">
                        <i class="bi bi-person-fill" style="margin-left: 45px;"></i>
                        <h4>{{name}}</h4>
                    </div>
                    <div class="contact">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-person-fill" style="padding: 9px;"></i>Name:</span>
                            <p class="form-control" style="border: none; margin: 10px">{{name}}</p>
                        </div>
                    </div>
                    <div class="contact">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-telephone-fill" style="padding: 9px;"></i>Phone:</span>
                            <p class="form-control" style="border: none; margin: 10px">{{phone}}</p>
                        </div>
                    </div>
                    <div class="contact">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-envelope-fill" style="padding: 9px;"></i>Email:</span>
                            <p class="form-control" style="border: none; margin: 10px">{{mail}}</p>
                        </div>
                    </div>
                    <button type="button" data-bs-dismiss="modal" class="btn btn-light">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id','name', 'phone', 'mail'],
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
        },
        upData(){
            this.$emit('up-data',{id:this.id, name:this.name, phone:this.phone, mail:this.mail} )
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