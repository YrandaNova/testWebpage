// pages/index.js or any other component file

export const barData = {
  labels: [
    "something",
    "something2",
    "something3",
    "something4",
    "something5",
    "else",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgb(106, 90, 205,0.2)",
      ],
      borderColor: [
        "rgba(238, 130, 238,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgb(106, 90, 205,1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const barOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
export const lineData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
export const polarData = {
  labels: ["Pink", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgba(238, 130, 238,0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
    },
  ],
};
export const radarData = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "Person One",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Person Two",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};
export const doughnutData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 80, 70],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const doughnutOptions = {
  animation: {
    animateScale: true,
    animateRotate: true,
  },
};
