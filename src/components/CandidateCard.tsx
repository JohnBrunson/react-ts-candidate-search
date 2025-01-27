// import type React from "react";
// import type Candidate from "../interfaces/Candidate.interface";
// import { FcPlus } from "react-icons/fc";
// import { FcMinus } from "react-icons/fc";

// type CandidateCardProps = {
//     currentCandidate: Candidate;
//     addToSavedCandidates?: (() => void) | null;
//     onCandidateList?: boolean | null;
//     removeFromStorage?:
//     | ((
//         e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//         currentlyOnCandidateList: boolean | null | undefined,
//         title: string | null
//       ) => void)
//     | null;

// };

// const CandidateCard = ({
//     currentCandidate,
//     addToSavedCandidates,
//     onCandidateList,
//     removeFromStorage,

// }: CandidateCardProps) => {
//     return (
//         <>
//         {currentCandidate.Username ? (
//         <section className='candidateCard'>
//           <figure>
//             <img src={`${currentCandidate.Avatar}`} alt={`${currentCandidate.Username}`} />
//           </figure>
//           <article className='details'>
//             <h2>{currentCandidate.Name}</h2>
//             <p>
//               <strong>Location:</strong> {currentCandidate.Location}
//             </p>
//             <p>
//               <strong>Email:</strong> {currentCandidate.Location}
//             </p>
//             <p>
//               <strong>Company:</strong> {currentCandidate.Company}
//             </p>
//             {/* <p>
//               <strong>Bio:</strong> {currentCandidate.Bio}
//             </p> */}
//           </article>

//           {onCandidateList ? (
//             <aside className='icons'>
//               <FcPlus
//                 style={{ fontSize: '40px', cursor: 'pointer' }}
//                 onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
//                   removeFromStorage?.(
//                     e,
//                     addToSavedCandidates,
//                     onCandidateList
//                   )
//                 }
//                 >
//                     <FcMinus
//                     style={{ fontSize: '40px', cursor: 'pointer'}}
//                     onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
//                         removeFromStorage.{
//                             e,
//                             addToSavedCandidates,
//                             onCandidateList
//                         }
//                     }>
//             </aside>
//         </section>
//       )}
//         </>
//    export default CandidateCard; 
import type React from "react";
import type Candidate from "../interfaces/Candidate.interface";
import { FcPlus, FcMinus } from "react-icons/fc";

type CandidateCardProps = {
  currentCandidate: Candidate;
  addToSavedCandidates?: (() => void) | null;
  onCandidateList?: boolean | null;
  removeFromStorage?: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnCandidateList: boolean | null | undefined,
    title: string | null
  ) => void | null;
};

const CandidateCard = ({
  currentCandidate,
  addToSavedCandidates,
  onCandidateList,
  removeFromStorage,
}: CandidateCardProps) => {
  return (
    <>
      {currentCandidate.Username ? (
        <section className="candidateCard">
          <figure>
            <img
              src={`${currentCandidate.Avatar}`}
              alt={`${currentCandidate.Username}`}
            />
          </figure>
          <article className="details">
            <h2>{currentCandidate.Name} ({currentCandidate.Username})</h2>
            <p>
              Location: {currentCandidate.Location}
            </p>
            <p>
              Email: {currentCandidate.Email}
            </p>
            <p>
              Company: {currentCandidate.Company}
            </p>
            <p>
                
            </p>
          </article>

          {onCandidateList ? (
            <aside className="icons">
              <FcPlus
                style={{ fontSize: "40px", cursor: "pointer" }}
                onClick={addToSavedCandidates || undefined}
              />
              <FcMinus
                style={{ fontSize: "40px", cursor: "pointer" }}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                  removeFromStorage?.(
                    e,
                    onCandidateList,
                    currentCandidate.Name
                  )
                }
              />
            </aside>
          ) : null}
        </section>
      ) : null}
    </>
  );
};

export default CandidateCard;