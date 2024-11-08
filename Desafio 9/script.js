let currentStep = 1;
const totalSteps = 6;

function showStep(step) {
  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById(`step${i}`).style.display = i === step ? 'block' : 'none';
  }
  document.getElementById("bonus").style.display = step === 6 ? 'block' : 'none';
  document.getElementById("prevButton").disabled = step === 1;
  document.getElementById("nextButton").disabled = step === 6;
}

document.getElementById("prevButton").addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  }
});

showStep(currentStep);
