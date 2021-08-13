const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 5;
  } else if (day === "wednesday") {
    return 9;
  } else if (day === "thursday") {
    return 6;
  } else if (day === "friday") {
    return 9;
  } else if (day === "saturday") {
    return 8;
  } else {
    return 8;
  }
};
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("User got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "User got more sleep than needed. He/She slept for extra " +
        (actualSleepHours - idealSleepHours) +
        " hours."
    );
  } else {
    console.log(
      "User should get some rest. He/She needs additional " +
        (idealSleepHours - actualSleepHours) +
        " hours of sleep"
    );
  }
}
calculateSleepDebt();
