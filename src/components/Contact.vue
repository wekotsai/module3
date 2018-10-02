<template>
  <div class="test">
  <div class="container-fluid bg-light py-3">
    <form id="contact-form" action="#" method="post" role="form">
        <div class="messages"></div>
        <div class="controls">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="form_name">Subject *</label>
                        <input v-model="subject" id="form_name" type="text" name="subject" class="form-control" placeholder="Please enter your subject *" required="required" data-error="name is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="form_email">Email *</label>
                        <input v-model="email" id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="form_phone">Phone</label>
                        <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone number">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="form_message">Message *</label>
                    <textarea v-model="message" id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="send a message."></textarea>
                    <div class="help-block with-errors"></div>
                </div>
            </div>
            <div class="col-md-12">
            <a v-bind:href="'mailto:info@nysl.com?subject=' + subject + '&body=' + message">
                <input type="button" class="btn btn-success btn-send" value="Send message"></a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p class="text-muted"><strong>*</strong> These fields are required.</p>
            </div>
        </div>
    </form>
</div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: function() {
        return {
            subject: '',
            email: '',
            message: '',
        }
   },
   watch: {
     subject: function (val) {
         this.subject = this.subject.replace(" ", "%20")
     }
   }
}
</script>


<style scoped>
p {
  color: white;
  font-size: 20px;
  padding: 20px;
  }
label {
  display: block; 
  text-align: left;
}

</style>
