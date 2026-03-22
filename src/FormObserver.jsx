/* 
Did the user pick yearly or monthly?
true - yearly
false - monthly
const [plan, setPlan] = useState(false)
this affects pricing across the entire form -------------------------------------

useReducer - states/conditions
*setPersonalInfo - {name, email, phoneNumber}
*setPlan - {arcade,advanced, pro}
*setAddons - {Online Service, Larger Storage, Customizable Profile}
*setConfirm - {userConfirmation}
?ResetForm

?what could the bigger object look like?

{
name: "",
email: "",
phoneNumber: "",
plan: {
  arcade: false;
  advanced: false;
  pro: false;
},
adds: {
  onlineService: [true/false, price],
  largerStorage: [true/false, price],
  profile: [true/false, price]
},

confirmed: true/false,
reset(),
}

*/
