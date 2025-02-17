import React from "react";
import moment from "moment";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import { getJudicialDistrictFromCounty } from "../form-common-options/form-common-options";

export default class PetitionForConviction_Pdf extends React.Component {
  render() {
    const { data, renderData } = this.props;

    return (
      <>
        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-1.png">
          <PositionedString debugKey="name" left={farLeft} top="14.06%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>

          <PositionedString
            dataKey="person.addressStreet"
            left={farLeft}
            top="17.50%"
          />

          <PositionedString debugKey="lineAddress" left={farLeft} top="20.90%">
            {`${renderData("person.addressCity")} ${renderData(
              "person.addressState"
            )} ${renderData("person.addressZip")}`}
          </PositionedString>

          <PositionedString
            dataKey="person.dayPhone"
            left={farLeft}
            top="24.45%"
          />

          <PositionedString
            dataKey="person.email"
            left={farLeft}
            top="27.95%"
          />

          <PositionedCheckmark
            dataKey="person.petitionerRepresentative"
            left={petRepLeft}
            top="31%"
            shouldShow={data.person.petitionerRepresentative === "petitioner"}
          />

          <PositionedCheckmark
            dataKey="person.petitionerRepresentative"
            left={petRepLeft}
            top="32.75%"
            shouldShow={data.person.petitionerRepresentative === "attorney"}
          />

          <PositionedString
            dataKey="person.petitionerBarNumber"
            left={barNumberLeft}
            top="32.75%"
          />

          <PositionedCheckmark
            dataKey="case.courtType"
            left="37.5%"
            top="36.5%"
            shouldShow={data.case.courtType === "District"}
          />

          <PositionedCheckmark
            dataKey="case.courtType"
            left="47.9%"
            top="36.6%"
            shouldShow={data.case.courtType === "Justice"}
          />

          <PositionedString
            debugKey="county"
            dataKey="case.county"
            left="50.90%"
            top="39.75%"
          />

          <PositionedString left="26.1%" top="39.75%" debugKey="county">
            {this.props.data.case.county
              ? getJudicialDistrictFromCounty(this.props.data.case.county)
              : null}
          </PositionedString>

          <PositionedString debugKey="addressCourt" left="27.8%" top="43.1%">
            {`${renderData("case.addressCourtStreet")}, ${renderData(
              "case.addressCourtCity"
            )}, ${renderData("case.addressCourtState")} ${renderData(
              "case.addressCourtZip"
            )}`}
          </PositionedString>

          <PositionedString debugKey="petitionerName" left="11.9%" top="52.9%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>

          <PositionedString
            dataKey="case.caseNumber"
            left="54.1%"
            top="52.9%"
          />

          <PositionedString dataKey="case.judgeName" left="54.1%" top="57.5%" />

          <PositionedString
            dataKey="case.caseNumber"
            left="17.4%"
            top="65.5%"
          />

          <PositionedString
            dataKey="case.publicInterest"
            left="17.4%"
            top="78%"
            style={{
              width: "74%",
              height: "15%",
              lineHeight: "30px",
              overflowY: "hidden"
            }}
          />
        </RenderPage>

        <RenderPage url="/static/forms/petition-to-expunge-conviction/Petition_to_Expunge_Records_Criminal-conviction-2.png">
          <PositionedString debugKey="todaysDate" left="11.5%" top="36.5%">
            {moment().format("L")}
          </PositionedString>

          <PositionedString debugKey="printedName" left="54.4%" top="39.6%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>
        </RenderPage>
      </>
    );
  }
}

const farLeft = `11.28%`;
const petRepLeft = `20.82%`;
const barNumberLeft = `62.2%`;
