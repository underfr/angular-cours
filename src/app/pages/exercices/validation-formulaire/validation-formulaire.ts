import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRules = [
  { label: "At least 8 characters", regex: /.{8,}/ },
  { label: "One uppercase letter", regex: /[A-Z]/ },
  { label: "One lowercase letter", regex: /[a-z]/ },
  { label: "One number", regex: /\d/ },
  { label: "One special character", regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/}
]
const PHONE_REGEX = /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]?\d{2}){4}$/

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-validation-formulaire',
  styleUrl: './validation-formulaire.css',
  templateUrl: './validation-formulaire.html',
})
export class ValidationFormulaire {
  email = signal<string>('')
  password = signal<string>('')
  phone = signal<string>('')
  showPassword = signal<boolean>(false)
  securityWarning = signal<string>('')

  isEmailValid = computed(()=> EMAIL_REGEX.test(this.email()))
  isPhoneValid = computed(()=> PHONE_REGEX.test(this.phone()))

  emailError = computed(()=>{
    if (this.email().length !== 0 && !this.isEmailValid()){
      return 'Invalid email'
    } else {
      return ''
    }
  })

  passwordChecks = computed(()=>{
    return passwordRules.map(rule => ({
      label: rule.label,
      valid: rule.regex.test(this.password())
    }))
  })

  score = computed(()=>{
    return this.passwordChecks().filter(check => check.valid ).length
  })

  progressClass = computed(()=>{
    if (this.score() <=2) return 'progress-error'
    if (this.score() <=4) return 'progress-warning'
    return 'progress-success'
  })

  isFormValid = computed(() => {
    return this.email()
      && this.isEmailValid()
      && this.score() === 5
      && this.passwordChecks()
      && this.isPhoneValid()
      && this.securityWarning() === ''
  })

  handleSubmit(){
    console.log({email: this.email(), phone: this.phone(), password: this.password()})
  }
}
