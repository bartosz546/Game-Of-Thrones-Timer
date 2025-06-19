export class HouseLogo {

  public simplifiedLogo: string;
  public detailedLogo: string;

  constructor(public houseName: string) {
    this.simplifiedLogo = "./assets/house-simplified-logo/"+ houseName+".jpg";
    this.detailedLogo = "./assets/house-detailed-logo/"+ houseName+".jpg";
  }
}
