if (IntersectionObserver) {
  const observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries.filter(ones => ones.isIntersecting)) {
      entry.target
        .querySelectorAll(".gauge:not(.animated)")
        .forEach(gaugeElement => {
          const gauge = gaugeElement as HTMLElement;
          gauge.dataset["progress"] = gauge.dataset["progress-after"];
          gauge.classList.add("animated");
        });

      entry.target
        .querySelectorAll(".progress-bar:not(.animated)")
        .forEach(gaugeElement => {
          const gauge = gaugeElement as HTMLElement;
          gauge.dataset["progress"] = gauge.dataset["progress-after"];
          gauge.classList.add("animated");
        });
    }
  });

  observer.observe(document.querySelector("#programming"));
  observer.observe(document.querySelector("#skills"));
  observer.observe(document.querySelector("#languages"));
} else {
  // IntersectionObserver is not supported. Setting gauges to after values
  document.querySelectorAll(".gauge, .progress-bar").forEach(gaugeElement => {
    const gauge = gaugeElement as HTMLElement;
    gauge.dataset["progress"] = gauge.dataset["progress-after"];
  });
}
