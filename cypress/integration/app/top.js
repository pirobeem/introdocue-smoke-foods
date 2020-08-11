context("top page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("confirm header", () => {
    cy.get("#title").contains("Introduce Smoked Foods");
  });

  it("confirm flex items", () => {
    const topics = [
      {
        title: "Smoke Type",
        body:
          "There are 3 types. Heat-Smoking, Hot-Smoking, Cold-Smoking. Heat-Smoking is to smoke food with temparatur form 80 to 140 degrees.",
      },
      { title: "Smoke Goods", body: "Card board, silverware and so on." },
      {
        title: "Getting Started",
        body: "You can make smoke food with smoke tool kit for begginer.",
      },
    ];
    cy.get("#topics >").should(($topisc) => {
      expect($topisc).to.have.length(3);
    });
    cy.get("#topics").each(($el, idx) => {
      cy.wrap($el).first().contains(topics[idx].title);
    });
  });
});
