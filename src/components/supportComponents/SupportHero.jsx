/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";
import { RiBuildingLine } from "react-icons/ri";
import { MdOutlineDomainVerification } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";



import { UserIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const SupportHero = () => {
  const [modalContent, setModalContent] = useState(null);
  const [modalQuestions, setModalQuestions] = useState([]);

  const handleOpenModal = (title, questions) => {
    setModalContent(title);
    setModalQuestions(questions);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setModalQuestions([]);
  };

  return (
    <div className="p-6 w-full text-start">
      <Link
        to={"/support/write-us"}
        className="px-4 py-2 rounded flex items-center gap-3"
      >
        <FiMessageSquare className="text-2xl mt-1" />
        <h2 className="text-xl font-semibold">Nachricht senden</h2>
      </Link>

      <div className="mt-6">
        <h3 className="text-[20px] font-semibold">Fragen und Antworten</h3>
        {/* <input
          type="text"
          className="mt-2 p-2 bg-gray-100 w-full rounded"
          placeholder="Suche..."
        /> */}
        <ul className="">
          {/* Account Eröffnung(1) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Account Eröffnung", [
                  {
                    question: "Wie eröffne ich einen Account?",
                    answer:
                      "Die Eröffnung eines Accounts ist in wenigen Minuten möglich. Es sind folgende Schritte notwendig: 1.Registrierung mit der privaten E-Mail-Adresse. 2.Angabe der persönlichen Daten und Verifizierung dieser mit einem gültigen Ausweisdokument. 3.Informationen zu Kenntnissen und Erfahrungen mit Finanzprodukten. 4.Verknüpfung der Security App mit dem Account.",
                  },
                  {
                    question: "Ist die Account-Eröffnung kostenlos?",
                    answer:
                      "Nur bei einer erfolgreichen Vermittlung (bei Kauf oder Verkauf) von Wertpapieren wird Investor:innen eine Vermittlungsgebühr von 1,5 % des Kauf- bzw. Verkaufspreises direkt verrechnet.",
                  },
                  {
                    question:
                      "Kann ich einen Account von jedem Land aus eröffnen?",
                    answer:
                      "Sollte bereits ein Account bestehen und sich nur der Wohnsitz ändern, bitten wir dies unserem Support mitzuteilen, damit wir die Daten entsprechend aktualisieren können.",
                  },
                  {
                    question:
                      "Kann ich einen Account eröffnen, wenn ich in den USA steuerpflichtig bin?",
                    answer:
                      "Leider ist es derzeit nicht möglich, einen Account für Personen zu eröffnen, die in den USA steuerpflichtig sind. Grund dafür ist der sogenannte Foreign Account Tax Compliance Act (kurz: FATCA), der zur Bekämpfung von Steuerhinterziehung eingeführt wurde.",
                  },
                  {
                    question:
                      "Kann eine juristische Person einen Account eröffnen?",
                    answer:
                      "Aktuell können nur natürliche Personen einen Account eröffnen. Die App wird aber schon bald auch für juristische Personen nutzbar sein.",
                  },
                  {
                    question: "Kann ich einen Gemeinschafts-Account eröffnen?",
                    answer:
                      "Nein. Die Eröffnung eines gemeinschaftlichen Accounts ist zurzeit nicht möglich. Jede:r Investor:in kann nur einen eigenen Account eröffnen, der im eigenen Namen und auf eigene Rechnung geführt werden muss.",
                  },
                  {
                    question: "In welchen Sprachen ist die App verfügbar?",
                    answer:
                      "Aktuell ist die App nur auf Deutsch verfügbar. Eine englische Version wird schon bald verfügbar sein. ",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <UserIcon className="w-6 h-6 text-gray-600 " />
                <span className="text-[16px] font-semibold">
                  Account Eröffnung
                </span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/* Bauherrenmodell (2) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Bauherrenmodell", [
                  {
                    question: "Was versteht man unter einem Bauherrenmodell?",
                    answer:
                      "Ein Bauherrenmodell stellt eine attraktive Möglichkeit für Anleger dar, direkt Anteilseigentümer einer Liegenschaft zu werden. Durch das Investment in ein Bauherrenmodell tragen Anleger zur Schaffung von geförderten Mietwohnungen bei und erhalten im Gegenzug staatliche Förderungen sowie steuerliche Begünstigungen. Langfristig profitieren die Investor:innen von soliden Renditen, die durch inflationsgesicherte Mieterträge und die positive Entwicklung der Immobilienpreise beim Verkauf generiert werden. Es ist eine Investitionsform, die neben finanziellen Vorteilen auch sozialen Mehrwert schafft, indem bezahlbarer Wohnraum bereitgestellt wird.",
                  },
                  {
                    question:
                      "Wie kann ich mich mittels einer KG-Beteiligung an einem Bauherrenmodell beteiligen?",
                    answer:
                      "Eine Beteiligung an einem Bauherrenmodell über eine Kommanditgesellschaft (KG) ermöglicht es Ihnen, sich finanziell an einem Immobilienprojekt zu beteiligen, indem Sie in die KG investieren. Als Investor werden Sie zum Kommanditisten und erhalten Anteile an der KG, die das Bauvorhaben realisiert. Ihr Investment fließt direkt in die Entwicklung der Liegenschaft, einschließlich Kauf, Bau und Verwaltung von geförderten Mietwohnungen. Im Gegenzug profitieren Sie von den Erträgen des Projekts, wie z.B. Mieteinnahmen, sowie von steuerlichen Vorteilen durch Abschreibungen und staatlichen Förderungen. Die Beteiligung ist ab einem Betrag von EUR 20.000 möglich und richtet sich an Anleger mit einem längerfristigen Anlagehorizont, die bereit sind, ein gewisses Risiko zu tragen. Durch diese Investitionsform werden Sie Teil eines größeren Vorhabens, tragen sozial zur Schaffung von Wohnraum bei und können gleichzeitig von der Immobilienentwicklung profitieren.",
                  },
                  {
                    question:
                      "Welche Vorteile bietet eine KG-Beteiligung an einem Bauherrenmodell für mich als Anleger?",
                    answer:
                      "Als Anleger einer KG-Beteiligung an einem Bauherrenmodell genießen Sie eine Reihe von Vorteilen, die Ihre Investition attraktiv machen: a. Direktes Eigentum: Sie werden direkter Anteilseigentümer an einer Immobilie und sind über das Firmenbuch im Grundbuch eingetragen, was Ihnen nicht nur ein greifbares Investment, sondern auch langfristige Sicherheit bietet. b. Staatliche Förderungen und steuerliche Begünstigungen: Durch die Investition in geförderte Wohnprojekte können Sie von staatlichen Zuschüssen und steuerlichen Vorteilen profitieren, wie z.B. Abschreibungen und möglichen Steuererleichterungen. c. Inflationsgeschützte Renditen: Mieteinnahmen sind oft an die Inflation gekoppelt, was Ihre Investition gegen Kaufkraftverlust absichert. Zudem besteht die Chance auf Wertsteigerung der Immobilie. d. Sozialer Beitrag: Sie tragen zur Schaffung von bezahlbarem Wohnraum bei, was einen positiven sozialen Impact hat. e. Begrenzte Haftung: Ihre Haftung ist auf Ihre Einlage beschränkt, was das Risiko Ihrer Investition reduziert. f. Langfristige Kapitalanlage: Die Beteiligung ist ideal für Anleger mit einem langfristigen Anlagehorizont, die von der stetigen Entwicklung des Immobilienmarktes profitieren möchten. g. Diversifikation: Die Beteiligung an einem Bauherrenmodell kann eine wertvolle Ergänzung Ihres Investmentportfolios darstellen und zur Risikostreuung beitragen. Diese Kombination aus finanziellen, steuerlichen und sozialen Vorteilen macht die KG-Beteiligung an einem Bauherrenmodell zu einer attraktiven Option für Anleger, die in den Immobilienmarkt investieren und gleichzeitig einen Beitrag zur Gesellschaft leisten wollen.  ",
                  },
                  {
                    question:
                      "Wie ist der Ablauf bei einer Beteiligung an einem Bauherrenmodell, speziell bei der B179 GmbH & Co KG EINS, organisiert?",
                    answer:
                      "Die Beteiligung an einem Bauherrenmodell bei der B179 EINS GmbH & Co KG folgt einem klar definierten Ablauf, der Investoren ermöglicht, sich am Immobilienmarkt zu engagieren: Initiierung durch die RealPart GmbH: Die RealPart GmbH agiert als Erstkommanditistin und initiiert das Bauvorhaben durch die Gründung der B179 EINS GmbH & Co KG Investitionsmöglichkeit: Die RealPart GmbH bietet KG-Anteile ab EUR 20.000,- an interessierte Investoren an. Diese haben die Möglichkeit, sich als Kommanditisten an der B179 EINS GmbH & Co KG zu beteiligen und somit Teil des Projekts zu werden. Realisierung des Bauvorhabens: Mit dem eingeworbenen Kapital wird das Projekt realisiert. Dies umfasst den Kauf des Grundstücks, den Bau der Immobilie sowie deren Fertigstellung. Vermietung und Verwaltung: Nach der Fertigstellung der Immobilie wird diese vermietet. Die daraus resultierenden Mieteinnahmen fließen den Investoren entsprechend ihrer Beteiligung zu. Langfristige Perspektiven: Investoren profitieren von kontinuierlichen Mieteinnahmen, steuerlichen Vorteilen und der Möglichkeit einer Wertsteigerung der Immobilie. Zudem besteht die Option, die KG-Anteile zu einem späteren Zeitpunkt zu veräußern. Durch diese strukturierte Vorgehensweise bietet die Beteiligung an der B179 GmbH & Co KG EINS eine attraktive Möglichkeit für Investoren, sich am Immobilienmarkt zu engagieren, von langfristigen Erträgen zu profitieren und gleichzeitig einen sozialen Beitrag durch die Schaffung von Wohnraum zu leisten.  ",
                  },
                  {
                    question:
                      "Was sind die wesentlichen Unterschiede zwischen einem Bauherrenmodell und einer KG-Beteiligung an einem Bauherrenmodell?",
                    answer:
                      "Während das Bauherrenmodell und die KG-Beteiligung an einem Bauherrenmodell eng miteinander verbunden sind, gibt es einige wesentliche Unterschiede, die Investoren kennen sollten: 1. Bauherrenmodell:   Beim Bauherrenmodell investieren Anleger direkt in die Entwicklung eines Immobilienprojekts, meist durch eine direkte Beteiligung an der Immobilie oder das Bereitstellen von Kapital für den Bau. Anleger profitieren von staatlichen Förderungen, steuerlichen Vorteilen sowie von Mieteinnahmen und Wertsteigerungen der Immobilie. 2. KG-Beteiligung: Die KG-Beteiligung bezieht sich speziell auf die Investition in eine Kommanditgesellschaft, die ein Bauherrenmodell realisiert. Anleger werden Kommanditisten der KG und investieren ihr Kapital in das Unternehmen, das das Immobilienprojekt trägt. Diese Form der Beteiligung ist durch die beschränkte Haftung auf die Höhe der Einlage und die Teilhabe an den Erträgen des Unternehmens gekennzeichnet. Hauptunterschiede:  Beim Bauherrenmodell ist die Investition direkt mit dem Immobilienprojekt verknüpft, während die KG-Beteiligung eine Unternehmensbeteiligung darstellt. Haftung: Bei der KG-Beteiligung ist die Haftung des Anlegers auf die Einlage beschränkt, was ein geringeres finanzielles Risiko bedeutet. Steuerliche Behandlung: Die steuerlichen Vorteile können sich unterscheiden, insbesondere in Bezug auf die Abschreibungen und die Verlustzuweisungen. Verwaltung und Kontrolle:  Im Rahmen einer KG-Beteiligung ist die Verwaltung des Projekts oft stärker formalisiert, und Investoren haben in der Regel weniger direkten Einfluss auf das Management des Bauvorhabens. Beide Modelle bieten attraktive Möglichkeiten für Investoren, sich am Immobilienmarkt zu beteiligen, wobei die Wahl des geeigneten Modells von den individuellen Zielen, der Risikobereitschaft und den steuerlichen Überlegungen des Anlegers abhängt.  ",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <CiLock className="w-6 h-6 text-gray-600 " />
                <span className="text-[16px] font-semibold">
                  Bauherrenmodell
                </span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/* Handelsplatz (3) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Handelsplatz", [
                  {
                    question: "Was ist der Marktplatz?",
                    answer:
                      "Assets, die neu auf dem Marktplatz sind, werden mit einem entsprechenden “neu”-Tag gekennzeichnet. Ist die Finanzierungsphase eines Assets abgeschlossen, können die Wertpapiere ab diesem Zeitpunkt zwischen den Investorinnen direkt gehandelt werden.",
                  },
                  {
                    question: "Wie kann ich investieren?",
                    answer:
                      "Der Marktplatz bietet eine Übersicht aller vorhandenen Investitionsmöglichkeiten (Assets). Dabei ist zwischen Assets zu unterscheiden, die als “neu” gekennzeichnet sind, und Assets, deren Finanzierungsphase bereits abgeschlossen ist. Ist die Finanzierungsphase abgeschlossen, können die Wertpapiere am Zweitmarkt zwischen den Investor:innen gehandelt werden.  Handelt es sich um eine neue Investitionsmöglichkeit, können die Wertpapiere direkt von der Emittentin erworben werden. Sind die Wertpapiere bereits über den Zweitmarkt handelbar, kann entweder ein vorhandenes Verkaufsangebot direkt ausgewählt oder ein neues Kaufangebot erstellt werden. Dabei können die Anzahl und der Preis, zu dem Wertpapiere gekauft werden möchten, selbst festgelegt werden. Sobald das Angebot von einem:r anderen Investor:in angenommen wurde, muss das Angebot noch ein letztes Mal bestätigt werden, bevor die Wertpapiere gekauft und übertragen werden können.",
                  },
                  {
                    question: "Wie funktioniert der Handel am Marktplatz?",
                    answer:
                      "Über den Kauf- bzw. Verkaufsbutton, der auf der Detailseite eines Assets angezeigt wird, gelangt man zur Übersicht aller bestehenden Kauf- und Verkaufsangebote. Ist ein dort verfügbares Angebot (bestehend aus Preis pro Anteil und der Anzahl der angebotenen Wertpapiere) interessant, kann dieses direkt ausgewählt werden. Sobald der:die Ver-/ Käufer:in das Angebot erneut bestätigt hat, wird die Transaktion direkt zwischen den jeweiligen Investor:innen durchgeführt.",
                  },
                  {
                    question: "Warum sind meine Angebote noch ausständig?",
                    answer:
                      "Investor:innen können ihre Wertpapiere anderen Investor:innen jederzeit zum Kauf oder Verkauf anbieten. Dies erfordert, dass ein:e Käufer:in oder Verkäufer:in gefunden wird, der:die bereit ist, den angebotenen Kauf- bzw. Verkaufspreis zzgl. Transaktionskosten zu bezahlen. Je nach Angebot und Nachfrage kann dies auch längere Zeit in Anspruch nehmen. ",
                  },
                  {
                    question:
                      "Wie lange dauert es, bis meine Wertpapiere verkauft sind?",
                    answer:
                      "Wichtiger Hinweis: Es ist nicht gewährleistet, dass die Wertpapiere zum gewünschten oder einem anderen Zeitpunkt wieder verkauft werden können. In diesem Sinne kann nicht ausgeschlossen werden, dass die Wertpapiere nicht wieder verkauft werden können.",
                  },
                  {
                    question:
                      "Mit wem handle ich die Wertpapiere über die Plattform eigentlich?",
                    answer:
                      "Wertpapiere in Bezug auf Assets, die sich noch in der Finanzierungsphase befinden und mit einem “neu”-Tag gekennzeichnet sind, werden direkt von den jeweiligen Emittentinnen angeboten und verkauft. ",
                  },
                  {
                    question: "Was ist die Finanzierungsphase?",
                    answer:
                      "Die Finanzierungsphase (auch Emissionsphase genannt) bezeichnet den Zeitraum, in dem die Wertpapiere erstmals durch eine Emittentin ausgegeben werden. Sobald das Finanzierungsziel erreicht und die Wertpapiere an alle Investor:innen ausgegeben wurden, können die Anteile über die App am Zweitmarkt unter den Investor:innen direkt gehandelt werden.",
                  },
                  {
                    question:
                      "Kann ich meine Wertpapiere auch mit Freund:innen und Familienmitgliedern handeln?",
                    answer:
                      "Ja, grundsätzlich können die Wertpapiere auch direkt mit Familienmitgliedern und Freund:innen gehandelt werden. Dazu müssen die konkreten Informationen des Angebots geteilt werden, sodass das Angebot gefunden und angenommen werden kann. Es besteht jedoch keine Möglichkeit, den Erwerb der Wertpapiere Familienmitgliedern und Freund:innen vorzubehalten.",
                  },
                  {
                    question: "Was kostet der Handel am Marktplatz?",
                    answer:
                      "Für jeden Kauf oder Verkauf, der erfolgreich zustande kommt, wird eine Vermittlungsgebühr von 1,5 % der jeweiligen Transaktionshöhe verrechnet. Alle weiteren Informationen zu den Kosten sind in den Kosteninformationen dargestellt.",
                  },
                  {
                    question: "Was ist eine Emittentin?",
                    answer:
                      "Eine Emittentin bezeichnet eine Person, die Wertpapiere ausgibt. Bei den über die App angebotenen Wertpapieren handelt es sich dabei um juristische Personen (z.B. GmbH, AG) oder Personengesellschaften (z.B. KG oder GmbH & Co KG).",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <GoArrowSwitch className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">Handelsplatz</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/* Immobilien (4) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Immobilien", [
                  {
                    question: "Wer verwaltet die Immobilien?",
                    answer:
                      "Die Immobilien werden prinzipiell von der jeweiligen Emittentin, einer Immobiliengesellschaft, die die digitalen Wertpapiere ausgibt, verwaltet. Auch besteht die Möglichkeit, dass die Immobiliengesellschaft Dritte, wie z. B. eine Hausverwaltung, mit der Verwaltung beauftragt. Details hierzu können den jeweiligen Investitionsdokumenten entnommen werden. ",
                  },
                  {
                    question:
                      "Wer trifft Entscheidungen über die jeweilige Immobilie?",
                    answer:
                      "Allen Investor:innen stehen Mitbestimmungsrechte an der dem Wertpapier zugrunde liegenden Immobilie zu. Die konkreten Mitbestimmungsrechte sind in den jeweiligen Investitionsbedingungen geregelt.",
                  },
                  {
                    question: "Wer zahlt Reparaturen?",
                    answer:
                      "Kosten einer Instandhaltung oder von Investitionen, die das gesamte Gebäude betreffen, werden prinzipiell durch die Instandhaltungsrücklage der Eigentümergemeinschaft bezahlt. Reicht die Instandhaltungsrücklage nicht aus, so kann eine Sonderumlage durch die Eigentümergemeinschaft beschlossen werden. Dies verringert grundsätzlich den Ausschüttungsbetrag an die Investor:innen, sofern die Liquiditätsrücklage der Emittentin für die Zahlung der Sonderumlage nicht ausreicht. Sofern keine andere Möglichkeit besteht, müsste von der Emittentin ein Kredit für die Finanzierung der Instandhaltungskosten aufgenommen werden. ",
                  },
                  {
                    question:
                      "Kann ich auch eigene Vorschläge zur Verwaltung einer Immobilie einbringen?",
                    answer:
                      "Alle Investor:innen, die Wertpapiere in Bezug auf eine bestimmte Immobilie halten, können für diese auch eigene Vorschläge über das Forum der Investor:innen einbringen. Dazu muss im Forum der betreffenden Immobilie ein Voting beantragt werden. Innerhalb von 48 Stunden können alle Investor:innen darüber abstimmen, ob der eingebrachte Vorschlag zur Abstimmung zugelassen werden soll. Dafür müssen mindestens 10 % der Investor:innen und mindestens 10 % der digitalen Wertpapiere diesem Vorschlag zustimmen. Votings werden in der App immer 48 Stunden vor Beginn des Votings angekündigt, woraufhin ein 72-stündiges Zeitfenster für die eigentliche Abstimmung eröffnet wird. Auf jedes Wertpapier entfällt eine Stimme. ",
                  },
                  {
                    question:
                      "Bin ich Eigentümer:in der den Produkten zugrunde liegenden Immobilien?",
                    answer:
                      "Nein. Mit den digitalen Wertpapieren ist kein (grundbücherliches) Eigentum verbunden. Eigentümerin der Immobilie ist immer die jeweilige Emittentin. Bei den digitalen Anteilen handelt es sich um tokenisierte Wertpapiere, die sich auf ein zugrundeliegendes Asset wie eine Immobilie beziehen. Diese werden von einer Emittentin ausgegeben und können von Investor:innen erworben werden. Inhaber:innen digitaler Wertpapiere haben Anspruch (abhängig von der Anzahl der Wertpapiere) auf laufende Ausschüttungen sowie auf einen möglichen Erlös aus der Veräußerung des Assets.",
                  },
                  {
                    question: "Was ist das Zustandsprotokoll?",
                    answer:
                      "Es ist uns besonders wichtig, dass alle Investor:innen ausführlich über den Zustand der Immobilien informiert werden. Deswegen wird jede Immobilie vor der Emission der Wertpapiere von einem:einer Sachverständigen begutachtet. Der/die Sachverständige:r erstelt ein Zustandsprotokoll, das den gesamten Innenbereich der Wohnung, also Türen inkl. Wohnungseingangstür, Böden, Wände, Decke, Fenster, Sanitärräume usw. abdeckt.Sämtliche Bauteile in allen Räumen werden anhand einer Bewertungsskala beurteilt. Bauteile in einem neuwertigen oder sehr guten Zustand erhalten fünf Sterne. Im Gegensatz dazu werden Bauteile am Ende ihrer Nutzungsdauer mit nur einem Stern beurteilt. Der:die Sachverständige:r dokumentiert den Zustand des gesamten Objekts mit Fotos und Kommentaren. Am Ende der Begutachtung wird automatisch eine gewichtete Gesamtzustandsbewertung ermittelt. Zusätzlich gibt der:die Sachverständige:r aufgrund seiner:ihrer jahrelangen Erfahrung eine subjektive Gesamtzustandsbewertung ab. Am Ende der Begutachtung schließt der:die Sachverständige:r das Protokoll ab. ",
                  },
                  {
                    question: "Was passiert bei einem Leerstand?",
                    answer:
                      "Das Risiko eines Leerstandes kann von der Emittentin im Zweifel durch die gebildete Liquiditätsrücklage kompensiert werden. Sollte es einmal zu einem Leerstand kommen, dann werden die anfallenden Fixkosten durch diese Liquiditätsrücklage gedeckt. Für Investor:innen bedeutet das, dass in dieser Zeit keine Ausschüttungen erfolgen. Auch wenn eine Liquiditätsrücklage einmal nicht ausreichen sollte, sind Investor:innen zu keinem Zeitpunkt zu Nachschüssen verpflichtet. In einem solchen Fall müsste die Emittentin einen Überbrückungskredit aufnehmen. ",
                  },
                  {
                    question:
                      "Kann ich meine eigene Immobilie über Brickwise verkaufen?",
                    answer:
                      "Wir sind laufend auf der Suche nach geeigneten Objekten, die über den Marktplatz angeboten werden können. Sofern Interesse an einem Verkauf besteht, können alle Informationen zum Objekt gerne an ",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <RiBuildingLine className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">Immobilien</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/* Investitionen (5) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Investments", [
                  {
                    question: "Ich habe eine Beteiligung erworben, aber mein Kauf ist noch alsausstehend markiert. Woran liegt das?",
                    answer: "Der Status Ihres Kaufs als ausstehend hängt in der Regel mit zwei wesentlichen Schritten zusammen, die noch abgeschlossen werden müssen: dem Notartermin und der Überweisung des Kaufbetrags. Notartermin: Für die formelle Übertragung der Beteiligung ist ein Notartermin erforderlich, bei dem alle relevanten Unterlagen geprüft und unterzeichnet werden. Dieser Termin dient der rechtlichen Absicherung sowohl für Sie als Investor als auch für die Emittentin der Beteiligung und findet online statt. Die möglichen Termine finden Sie auf der Plattform. Überweisung: Nach erfolgter Kaufentscheidung erhalten Sie eine Aufforderung zur Einzahlung des Kaufpreises auf das angegebene Konto der Emittentin. Erst nach Eingang des Betrags kann der Kaufprozess vollständig abgeschlossen werden. Der Kauf bleibt als ausstehend markiert, bis beide Schritte erfolgreich durchgeführt wurden und alle erforderlichen Dokumentationen und Zahlungen bestätigt sind. Sollten Sie die notarielle Unterfertigung bereits vorgenommen und die Überweisung getätigt haben, wenden Sie sich an support@realpart.at. Wir verstehen, dass Wartezeiten Fragen aufwerfen können und danken Ihnen für Ihre Geduld während dieses wichtigen Prozesses, der die Sicherheit und Korrektheit Ihrer Investition gewährleistet.",
                  },
                  {
                    question: "Auf welche Weise erfolgt die Auszahlung der Mieteinnahmen aus meiner Beteiligung?",
                    answer: "Die Mieteinnahmen aus Ihrer Beteiligung an einem Bauherrenmodell werden jährlich und anteilig entsprechend Ihrer Beteiligungshöhe ausgeschüttet. Die Auszahlung erfolgt direkt auf das von Ihnen benannte Konto. Die Höhe Ihrer Beteiligung bestimmt somit den Anteil der Mieteinnahmen, die Sie erhalten. Dieser transparente und geregelte Ausschüttungsmechanismus stellt sicher, dass alle Investoren fair gemäß ihrem Anteil am Projekt partizipieren. Es ist wichtig, bei der Beteiligung ein Konto anzugeben, auf das Ihre Anteile der Mieteinnahmen überwiesen werden können. Diese regelmäßige und direkte Auszahlung ermöglicht es Ihnen, von kontinuierlichen Einkünften aus Ihrer Investition zu profitieren, und macht die Beteiligung an einem Bauherrenmodell zu einer attraktiven Option für Anleger, die nach einer stabilen Einnahmequelle suchen.",
                  },
                  {
                    question: "Wie lange habe ich Anspruch auf laufende Ausschüttungen?",
                    answer: "Wie bei Immobilien üblich, erhalten nur jene Investor:innen aus einer KG-Beteiligung eine Ausschüttung, die im Zeitpunkt der Ausschüttung im Besitz der KG-Anteile sind.",
                  },
                  {
                    question: "Wo finde ich einen Überblick über meine Investitionen?",
                    answer: "Alle Investments sind in der App unter dem Menüpunkt „Investments“ aufgelistet.",
                  },
                  {
                    question: "Wie sicher ist meine Investition in eine KG-Beteiligung im Rahmen eines Bauherrenmodells?",
                    answer: "Bei einer KG-Beteiligung an einem Bauherrenmodell ist Ihre Investition in mehrerer Hinsicht abgesichert, allerdings mit bestimmten Risiken verbunden, wie bei jeder Art von Investition. Ihre Haftung als Kommanditist ist grundsätzlich auf den Betrag Ihrer Einlage beschränkt, was bedeutet, dass Sie über diesen Betrag hinaus nicht für Verbindlichkeiten der KG haften. Zudem erfolgt eine professionelle Verwaltung der Immobilie durch die Immobiliengesellschaft oder beauftragte Dritte, die zur Wertstabilität und potenziellen Wertsteigerung beitragen kann.",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <AiFillSignal className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">Investments</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/*Investments (6) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Investments", [
                  {
                    question: "Warum ist mein Kauf noch ausstehend?",
                    answer:
                      "Werden Wertpapiere in Bezug auf ein Asset gezeichnet, das neu auf der Plattform ist und sich somit noch in der Finanzierungsphase befindet, erfolgt die Ausführung des Kaufs erst mit Abschluss dieser Finanzierungsphase. Anschließend werden die Wertpapiere an die Investor:innen ausgegeben und sind ab diesem Zeitpunkt über den Marktplatz handelbar. ",
                  },
                  {
                    question: "Was sind digitale Anteile?",
                    answer:
                      "Bei digitalen Anteilen handelt es sich um tokenisierte Wertpapiere, die sich auf ein zugrundeliegendes Asset beziehen, z.B. auf eine Immobilie. Diese werden von Emittentinnen ausgegeben und können von Investor:innen erworben werden. Inhaber:innen solcher digitalen Anteile haben Anspruch (abhängig von der Anzahl der erworbenen digitalen Anteile) auf laufende Ausschüttungen sowie auf einen möglichen Erlös aus der Veräußerung des Assets.",
                  },
                  {
                    question: "Wo sehe ich meine erhaltenen Ausschüttungen?",
                    answer:
                      "Erhaltene Ausschüttungen sind sowohl auf der Detailseite des jeweiligen Assets als auch unter dem Menüpunkt “Account” einsehbar.",
                  },
                  {
                    question:
                      "Wie lange habe ich Anspruch auf laufende Ausschüttungen?",
                    answer:
                      "Wie auch bei Aktien und Anleihen üblich, erhalten nur jene Investor:innen aus einem Wertpapier eine Ausschüttung, die im Zeitpunkt der Ausschüttung im Besitz der jeweiligen Wertpapiere sind.",
                  },
                  {
                    question:
                      "Woraus ergibt sich die Wertentwicklung meiner Wertpapiere?",
                    answer:
                      "Die Wertentwicklung ergibt sich aus dem aktuellen Marktwert der Wertpapiere im Vergleich zum Anfangswert des gewählten Vergleichszeitraums. Der Marktwert berechnet sich auf Basis der insgesamt verfügbaren Wertpapiere, multipliziert mit dem zuletzt gehandelten Preis am Marktplatz. ",
                  },
                  {
                    question:
                      "Wie berechnet sich der Gesamtwert meines Portfolios?",
                    answer:
                      "Der Gesamtwert des eigenen Portfolios ist die Summe der aktuellen Marktwerte aller gehaltenen Wertpapiere. Der Marktwert der Wertpapiere berechnet sich auf Basis der insgesamt verfügbaren Wertpapiere, multipliziert mit dem zuletzt gehandelten Preis am Marktplatz.",
                  },
                  {
                    question: "Wie berechnet sich der Marktwert?",
                    answer:
                      "Der Marktwert berechnet sich auf Basis der insgesamt verfügbaren Anteile, multipliziert mit dem zuletzt gehandelten Preis am Marktplatz. ",
                  },
                  {
                    question:
                      "Wo finde ich einen Überblick über meine Investments?",
                    answer:
                      "Alle Investments sind in der App unter dem Menüpunkt “Investments” aufgelistet. ",
                  },
                  {
                    question: "Sind meine Investments abgesichert?",
                    answer:
                      "Alle Immobilieninvestitionen, die sich auf österreichische Immobilien beziehen, werden grundsätzlich im Grundbuch abgesichert. Die Absicherung erfolgt dabei über ein im Grundbuch eingetragenes Kollektivpfandrecht zugunsten der Inhaber:innen der tokenisierten Wertpapiere in Höhe des Ausgabepreises (Nominale) der tokenisierten Wertpapiere. Der Antrag auf Einverleibung des Pfandrechts im Grundbuch wird von der Emittentin unmittelbar nach Erwerb der Immobilie gestellt. Die Eintragung kann jedoch mehrere Wochen in Anspruch nehmen, wodurch sich unmittelbar nach der Emission ein entsprechender Zeitraum ergeben kann, in dem das Pfandrecht noch nicht im Grundbuch eingetragen ist. ",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <AiFillSignal className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">Investments</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/* Verifizierung (7) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Verifizierung", [
                  {
                    question: "Warum muss ich mich identifzieren?",
                    answer:
                      "Wir sind nach den geltenden geldwäscherechtlichen Bestimmungen dazu verpflichtet, die Identität aller Investor:innen sowie die eingegebenen Daten anhand eines gültigen Ausweisdokuments abzugleichen und zu verifizieren. ",
                  },
                  {
                    question: "Wie kann ich mich identifizieren?",
                    answer:
                      "Je nach Wohnsitzland stehen unterschiedliche Identifizierungsmöglichkeiten zur Verfügung:Digitale Identifizierung  für Investor:innen mit Wohnsitz außerhalb Deutschlands Video-Identifizierung  für Investor:innen mit Wohnsitz in Deutschland",
                  },
                  {
                    question: "Wie funktioniert die digitale Identifizierung?",
                    answer:
                      "Nach Eingabe der persönlichen Daten kann die digitale Identifizierung direkt in der App gestartet werden. Die digitale Identifizierung dauert nur zwei Minuten. Nach dem Klick auf “Jetzt verifizieren” wird man gebeten, das jeweilige Ausweisdokument, mit dem man sich verifizieren möchte, auszuwählen. Anschließend ist ein Foto von der Vorderseite sowie der Rückseite (sofern zweiseitiges Dokument, z.B. Personalausweis) zu machen. Dabei wird im Hintergrund gleichzeitig ein Video gemacht, wodurch anhand der Bewegung des Ausweisdokuments die Sicherheitsmerkmale ersichtlich werden. Als weiterer Schritt muss ein Selfie gemacht und der aktuelle Standort einmalig freigegeben werden. Danach werden die Ausweisdaten automatisch mit den persönlichen Daten, die in der App angegeben wurden, abgeglichen. ",
                  },
                  {
                    question: "Wie funktioniert die Video-Identifizierung?",
                    answer:
                      "Nach Eingabe der persönlichen Daten kann die Video-Identifizierung direkt in der App gestartet werden. Die Video-Identifizierung dauert nur wenige Minuten. Nach dem Klick auf “Video-Identifizierung starten” wird man mit einem persönlichen Ansprechpartner von IDnow, unserem Kooperationspartner für Video-Identifizierungen, verbunden, der die Identifizierung durch Abgleich von Person und Ausweisdaten durchführt. Hierfür wird der Ausweis (Vorder- und Rückseite) automatisch erkannt und ausgelesen, wenn dieser nach Aufforderung in die Kamera gehalten wird. Dabei werden auch die Sicherheitsmerkmale des Ausweises geprüft.",
                  },
                  {
                    question:
                      "Welche Ausweisdokumente werden für die Identifizierung akzeptiert?",
                    answer:
                      "Welches Ausweisdokument wir akzeptieren können, hängt vom Wohnsitzstaat des/der Investors/Investorin ab: EWR-Mitgliedsstaaten: Reisepass und nationaler Personalausweis International (außerhalb der EU): Reisepass Kund:innen in Österreich: ebenso mit Führerschein möglich Die Dokumente müssen deutlich und lesbar (insbesondere das MRZ-Band), vollständig (beidseitig) und gültig (nicht abgelaufen) sein.",
                  },
                  {
                    question:
                      "Was kann ich tun, wenn während der Identifizierung ein Problem auftritt?",
                    answer:
                      "Unser Support kümmert sich gerne um jedes Anliegen. Sende einfach über die App eine Nachricht an den Support oder vereinbare einen Rückruf. ",
                  },
                  {
                    question:
                      "Warum werden meine Erfahrungen und Kenntnisse abgefragt?",
                    answer:
                      "Wir sind gesetzlich dazu verpflichtet, Informationen über die Kenntnisse und Erfahrungen aller Investor:innen mit Finanzinstrumenten und Wertpapierdienstleistungen einzuholen. Mittels dieser Angaben können wir prüfen, ob die erforderlichen Kenntnisse und Erfahrungen bestehen, um die Risiken im Zusammenhang mit der Art der angebotenen Produkte und Wertpapierdienstleistungen angemessen beurteilen zu können.",
                  },
                  {
                    question: "Wann ist ein Produkt für mich angemessen?",
                    answer:
                      "Ein Finanzprodukt wird dann als angemessen erachtet, wenn ein:e Investor:in über ausreichende Erfahrungen und Kenntnisse verfügt, um die Risiken im Zusammenhang mit den angebotenen Produkten verstehen und beurteilen zu können. Sollten wir aufgrund der Angaben über die persönlichen Erfahrungen und Kenntnisse von Investor:innen mit gewissen Finanzprodukten zu der Ansicht gelangen, dass die angebotenen Produkte nicht angemessen sind, weisen wir Investor:innen darauf hin. ",
                  },
                  {
                    question:
                      "Kann ich in Produkte investieren, die für mich nicht angemessen sind?",
                    answer:
                      "Sollten wir aufgrund der Angaben über die persönlichen Erfahrungen und Kenntnisse mit gewissen Finanzprodukten zu der Ansicht gelangen, dass die angebotenen Produkte nicht angemessen sind, weisen wir Investor:innen darauf hin.  Wenn es jedoch der ausdrückliche Wunsch sein sollte, trotz des Hinweises mit der Investition fortzufahren, ist dies mit einer Bestätigung durch den/die Investor:in möglich. ",
                  },
                  {
                    question: "Was ist eine politisch exponierte Person (PEP)?",
                    answer:
                      "Eine politisch exponierte Person (PEP) ist eine Person, die entweder selbst ein hochrangiges wichtiges öffentliches Amt (z.B. Politiker:in, Botschafter:in, Richter:in oberster Gerichte) ausübt oder ausgeübt hat oder eine Person aus deren unmittelbaren persönlichen Umfeld (z.B. Familienmitglieder oder nahestehende Personen). Staatschefs, Regierungschefs, Minister, stellvertretende Minister und Staatssekretäre; im Inland betrifft dies insbesondere den Bundespräsidenten, den Bundeskanzler und die Mitglieder der Bundesregierung und der Landesregierungen; Parlamentsabgeordnete oder Mitglieder vergleichbarer Gesetzgebungsorgane; im Inland betrifft dies insbesondere die Abgeordneten des Nationalrates und des Bundesrates;  Mitglieder der Führungsgremien politischer Parteien; im Inland betrifft dies insbesondere Mitglieder der Führungsgremien von im Nationalrat vertretenen politischen Parteien;  Mitglieder von obersten Gerichtshöfen, Verfassungsgerichtshöfen oder sonstigen hohen Gerichten, gegen deren Entscheidungen, von außergewöhnlichen Umständen abgesehen, kein Rechtsmittel mehr eingelegt werden kann; im Inland betrifft dies insbesondere Richter:innen des Obersten Gerichtshofs, des Verfassungsgerichtshofs und des Verwaltungsgerichtshofs;  Mitglieder von Rechnungshöfen oder der Leitungsorgane von Zentralbanken; im Inland betrifft dies insbesondere den Präsidenten des Bundesrechnungshofes sowie die Direktoren der Landesrechnungshöfe und Mitglieder des Direktoriums der österreichischen Nationalbank;  Botschafter, Geschäftsträger und hochrangige Offizier:innen der Streitkräfte; im Inland sind hochrangige Offizier:innen der Streitkräfte, insbesondere Militärpersonen ab dem Dienstgrad Generalleutnant:in;  Mitglieder der Verwaltungs-, Leitungs- oder Aufsichtsorgane staatseigener Unternehmen; im Inland betrifft dies insbesondere Unternehmen bei denen der Bund mit mindestens 50% des Stamm-, Grund- oder Eigenkapitals beteiligt ist oder die der Bund alleine betreibt oder die der Bund durch finanzielle oder sonstige wirtschaftliche oder organisatorische Maßnahmen tatsächlich beherrscht; bei Unternehmen an denen ein Land mit mindestens 50% des Stamm-, Grund- oder Eigenkapitals beteiligt ist oder die ein Land alleine betreibt oder die ein Land durch finanzielle oder sonstige wirtschaftliche oder organisatorische Maßnahmen tatsächlich beherrscht – sofern der jährliche Gesamtumsatz eines solchen Unternehmens 1.000.000 Euro übersteigt – der Vorstand bzw. die Geschäftsführung. Der jährliche Gesamtumsatz bestimmt sich nach den jährlichen Umsatzerlösen aus dem letzten festgestellten Jahresabschluss.  Direktoren, stellvertretende Direktoren und Mitglieder des Leitungsorgans oder eine vergleichbare Funktion bei einer internationalen Organisation. ",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <MdOutlineDomainVerification className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold ">
                  Verifizierung
                </span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/* Kontoeröffnung (8) */}


          {/*Persönliche Daten (9) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Persönliche Daten", [
                  {
                    question: "Wie kann ich meine persönlichen Daten ändern?",
                    answer:
                      "Sollten sich Daten geändert haben oder nicht korrekt angezeigt werden, können diese in der App unter dem Menüpunkt Account / Einstellungen jederzeit geändert werden.  Aus rechtlichen Gründen können einige Daten wie z.B. der Name nur nach Übermittlung eines entsprechenden Nachweises an unseren Support geändert werden. ",
                  },
                  {
                    question: "Wie kann ich mein Konto schließen?",
                    answer:
                      "Die Accountlöschung kann entweder in App unter Account / Einstellungen durchgeführt werden oder durch eine Nachricht an den Support.  ",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <FaUserCheck className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">
                  Persönliche Daten
                </span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/*Security App (10) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Security App", [
                  {
                    question: "Wozu benötige ich eine Security App?",
                    answer:
                      "Bei der Einrichtung der Security App wird im Hintergrund ein privater und öffentlicher Schlüssel generiert. Anhand des öffentlichen Schlüssels wissen wir, welche Transaktionen auf der Blockchain welcher Investor:in zuzuordnen ist. Auf den privaten Schlüssel hat nur die/der jeweilige Investor:in Zugriff. Der private Schlüssel wird für die digitale Signierung von Transaktionen benötigt. Der private Schlüssel muss zudem mittels einer PIN oder einer Fingerabdruck-/Gesichtserkennung (abhängig vom Smartphone) gesichert werden.",
                  },
                  {
                    question:
                      "Warum erhalte ich einen Verknüpfungscode per SMS?",
                    answer:
                      "Bei der Einrichtung der Security App werden im Hintergrund ein privater und ein öffentlicher Schlüssel generiert. Anhand des öffentlichen Schlüssels wissen wir, welche Transaktionen auf der Blockchain welchem/welcher Investor:in zuzurechnen sind.",
                  },
                  {
                    question:
                      "Wie kann ich in der Security App einen neuen PIN festlegen?",
                    answer:
                      "Wurde der PIN-Code vergessen, kann dieser über die Anmeldeseite unter “PIN vergessen” zurückgesetzt werden. WICHTIG: Um den PIN-Code zurückzusetzen, wird die Wiederherstellungsdatei benötigt, welche bei der erstmaligen Aktivierung der Security App unbedingt gespeichert werden muss. ",
                  },
                  {
                    question:
                      "Wurde der PIN-Code vergessen, kann dieser über die Anmeldeseite unter “PIN vergessen” zurückgesetzt werden.  Was tue ich, wenn ich meinen PIN-Code für die Security App vergessen habe?",
                    answer:
                      "WICHTIG: Um den PIN-Code zurückzusetzen, wird die Wiederherstellungsdatei benötigt, welche bei der erstmaligen Aktivierung der Security App sorgfältig gespeichert werden muss. ",
                  },
                  {
                    question:
                      "Warum muss ich die Wiederherstellungsdatei speichern?",
                    answer:
                      "Die Wiederherstellungsdatei wird für den Fall des Verlusts oder Austausch des Mobiltelefons oder falls der eigene PIN-Code vergessen wurde, benötigt, um die eigene Security App wiederherzustellen.  Jeder, der diesen Wiederherstellungsschlüssel kennt, kann theoretisch über die digitalen Wertpapiere verfügen. Es ist daher besonders wichtig, dass die Wiederherstellungsdatei ausgedruckt und/oder auf einem sicheren Medium (USB-Stick / externe Festplatte / persönliche Cloud) gespeichert wird und an einem sicheren Ort aufbewahrt wird, zu dem ausschließlich der:die Investor:in Zugang hat (z.B. in einem Bankschließfach).",
                  },
                  {
                    question:
                      "Was tue ich, wenn ich meine Wiederherstellungsdatei verloren habe?",
                    answer:
                      "Sollte die Wiederherstellungsdatei nicht mehr auffindbar sein, kontaktiere bitte den Support.",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <CiLock className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">Security App</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/* Sicherheit(11) */}

          {/*Steuern (12) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Sicherheitp", [
                  {
                    question: "Wie wird mein Account geschützt?",
                    answer:
                      "Die Sicherheit der Investments und dazugehörigen Daten steht bei uns an oberster Stelle. Zum Schutz aller Accounts setzen wir auf eine dreistufige Sicherheitsarchitektur:  Die Zugangsdaten zu jedem Account bestehen aus einem Benutzernamen und einem Passwort.  Jede Auszahlung vom persönlichen Zahlungskonto ist nur mittels einer SMS-TAN möglich, die wir an die im Account hinterlegte Mobilnummer schicken.  Jede Übertragung von Anteilen muss mit der Security App digital signiert werden. Außerdem haben wir 3D-Secure eingerichtet, um Investor:innen vor Online-Kreditkartenbetrug zu schützen.    Zudem nehmen wir mit Investor:innen ausschließlich direkt über die App, die E-Mail-Adresse des Accounts oder die hinterlegte Mobilnummer Kontakt auf. Sollten wir telefonisch Kontakt aufnehmen, werden wir aus Sicherheitsgründen um persönliche Informationen bitten, um sicherzustellen, dass wir wirklich mit der betroffenen Person sprechen.",
                  },
                  {
                    question: "Wie kann ich mein Passwort zurücksetzen?",
                    answer:
                      "Das Passwort kann in der App unter Einstellungen / Sicherheit jederzeit geändert werden.Wurde das Passwort vergessen, kann dieses über die Log-in-Seite unter “vergessen” mithilfe der E-Mail-Adresse zurückgesetzt werden. Hierzu wird ein Bestätigungscode an die in der App hinterlegte E-Mail-Adresse geschickt. Anschließend kann ein neues Passwort festgelegt werden. ",
                  },
                  {
                    question: "Warum wird meine Handynummer benötigt?",
                    answer:
                      "Die Handynummer wird benötigt, um den Account mit der eigenen Security App zu verknüpfen. Diese wird benötigt, um Transaktionen sicher zu bestätigen und freizugeben.",
                  },
                  {
                    question: "Warum wird Blockchain-Technologie genutzt?",
                    answer:
                      "Um einen einfachen, kostengünstigen und sicheren Handel von digitalen Wertpapieren zu ermöglichen, wurde ein eigenes Blockchain-Netzwerk eingerichtet – das Brickprotocol. Durch den Einsatz der Blockchain-Technologie werden klassische Vermögenswerte (Assets) digitalisiert und dabei in viele kleine digitale Anteile zerlegt, wodurch eine mögliche Beteiligung bereits mit kleinen Beträgen an einzelnen Assets realisiert werden kann. Zudem können digitale Anteile jederzeit über den Marktplatz direkt mit anderen Investor:innen gehandelt werden. Alle Transaktionen werden dabei in Echtzeit über das Brickprotocol durchgeführt und auf dem Account erfasst. Das ist nicht nur besonders effizient, sondern auch besonders sicher.",
                  },
                  {
                    question:
                      "Warum sind meine Wertpapiere auf der Blockchain sicher?",
                    answer:
                      "Dezentralität:Betrachtet man die Blockchain als Datenbank, wird diese innerhalb eines dezentralen Computer-Netzwerkes auf vielen verschiedenen Rechnern gespeichert. Jeder dieser Rechner hat die gesamte oder zumindest Teile der Datenbank gespeichert. Somit werden die Informationen über einzelne Accounts nicht mehr zentral gespeichert, wie dies etwa auf einem Server einer Bank geschieht. Anonymität :Die Identität der Investorinnen bleibt im gesamten Netzwerk zu jeder Zeit verborgen. Transaktionen sind zwar transparent einsehbar, Investor:innen bleiben aber stets anonym.  Transparenz:Wir haben nichts zu verbergen. Es kann jederzeit im Netzwerk überprüft werden, ob die dargestellten Informationen korrekt sind und es entsprechende Transaktionen gegeben hat, die dies belegen. Eine Manipulation der Daten ist nicht möglich. Sicherheit:Durch die Dezentralität und Transparenz können zudem Betrüger:innen schnell ausfindig gemacht und aus dem Netzwerk ausgeschlossen werden.",
                  },
                  {
                    question: "Was ist Phishing?",
                    answer:
                      "Phishing ist der Versand gefälschter E-Mails, die Menschen dazu verleiten sollen, auf einen Betrug hereinzufallen. Phishing-Mails zielen häufig darauf ab, dass die Nutzer Finanzinformationen, Zugangsdaten oder andere sensible Daten preisgeben. Sollten Investor:innen eine Nachricht im Namen unserer App erhalten, die verdächtig erscheint, kann jederzeit unser Support kontaktiert werden. Dieser kann dann bestätigen, ob diese Nachricht tatsächlich von uns versendet wurde oder nicht.  ",
                  },
                  {
                    question: "Wie schütze ich meinen Account?",
                    answer:
                      "Es ist besonders wichtig, dass die Zugangsdaten zum eigenen Account grundsätzlich mit keiner anderen Person geteilt werden. Zudem sollte ein individuelles Passwort vergeben werden, das nicht mehrfach genutzt wird. Ein Passwort-Manager ist hierbei eine praktische Hilfe. Sollte der Verdacht bestehen, dass der Account gefährdet sein könnte oder unerlaubte Änderungen vorgenommen wurden, sollte umgehend unser Support kontaktiert werden.",
                  },
                  {
                    question: "Wo werden meine persönlichen Daten gespeichert?",
                    answer:
                      "Persönliche Daten werden in einem Hochleistungsrechenzentrum in Deutschland gespeichert. Die Aufbewahrung der Daten erfolgt dort nach den höchsten Sicherheitsstandards (Zertifiziert nach ISO 27001).",
                  },
                  {
                    question:
                      "Wie kann ich ein neues Handy mit meinem Account verknüpfen?",
                    answer:
                      "Ein neues Handy mit dem eigenen Account zu verknüpfen ist kein Problem. Wichtig ist dabei, dass auf die Wiederherstellungsdatei zugegriffen werden kann, die bei der Erstinstallation der Security App als PDF heruntergeladen wurde, da diese bei einer neuen Verknüpfung unbedingt benötigt wird. Falls die Wiederherstellungsdatei nicht mehr verfügbar sein sollte, aber noch Zugriff auf das alte Handy besteht, kann die Datei in der Security App auf dem alten Gerät in den Einstellungen unter Wiederherstellungsdatei erneut heruntergeladen werden. Die Verknüpfung (sofern die Wiederherstellungsdatei vorhanden ist) funktioniert wie folgt: Verknüpfung in der Handels-App in den Accounteinstellungen trennen (Account – Einstellungen – Security App – neue Security App verknüpfen). Security App auf dem neuen Handy herunterladen und installieren. Mobilnummer in der Security App auf dem neuen Handy eingeben. Freischaltcode eingeben, der via SMS eintrifft. Wiederherstellungsdatei hochladen. Anschließend ist die neue Security App mit dem Account verknüpft und kann nun verwendet werden. Sollte weder Zugriff auf die Wiederherstellungsdatei noch auf das alte Gerät bestehen, bitten wir um Kontaktaufnahme mit unserem Support.",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <AiOutlineSafety className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">Sicherheitp</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>

          {/*Zahlungskonto (13) */}
          <li>
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100"
              onClick={() =>
                handleOpenModal("Zahlungskonto", [
                  {
                    question: "Was ist das Zahlungskonto?",
                    answer:
                      "Um Ein- und Auszahlungen vorzunehmen sowie um verschiedene Zahlungsmöglichkeiten für Investitionen anzubieten, wird im Namen der jeweiligen Investor:in ein Zahlungskonto (Treuhandkonto) bei unserem Kooperationspartner und Zahlungsdienstleister Mangopay eröffnet. ",
                  },
                  {
                    question:
                      "Wie lange dauert eine Überweisung auf das Zahlungskonto?",
                    answer:
                      "Sowohl bei einer Überweisung auf das Zahlungskonto als auch bei einer Auszahlung von diesem wird der Überweisungsbetrag dem jeweiligen Konto in der Regel innerhalb von zwei Bankarbeitstagen gutgeschrieben. Sobald eine Einzahlung am Zahlungskonto eingegangen ist, wird eine entsprechende Benachrichtigung verschickt. ",
                  },
                  {
                    question:
                      "Wie kann ich Geld auf mein Zahlungskonto einzahlen?",
                    answer:
                      "Investor:innen haben die Möglichkeit per SEPA-Überweisung Geld auf ihr Zahlungskonto einzuzahlen. Der IBAN zum persönlichen Zahlungskonto ist in der App unter dem Menüpunkt Account / Einzahlen hinterlegt. Der Verwendungszweck kann frei gewählt werden. Die Einzahlung wird dem jeweiligen Zahlungskonto in der Regel innerhalb von zwei Bankarbeitstagen gutgeschrieben. Sobald eine Einzahlung am Zahlungskonto eingegangen ist, wird eine entsprechende Benachrichtigung verschickt. Wir bitten um Verständnis, dass Einzahlungen von Dritten nicht akzeptiert werden können.",
                  },
                  {
                    question:
                      "Wie kann ich Geld von meinem Zahlungskonto auszahlen?",
                    answer:
                      "Das Guthaben, das sich am Zahlungskonto befindet, kann jederzeit über den Menüpunkt Account / Auszahlen vom Zahlungskonto auf das hinterlegte Auszahlungskonto ausgezahlt werden. Zu beachten ist, dass nur Guthaben ausbezahlt werden kann, das nicht aufgrund offener Kaufaufträge reserviert ist.",
                  },
                  {
                    question: "Was kostet eine Ein- oder Auszahlung?",
                    answer:
                      "Ein- und Auszahlungen sind kostenlos und jederzeit möglich.",
                  },
                  {
                    question: "Was bedeutet verfügbarer Kontostand?",
                    answer:
                      "Bei der Erstellung eines Kaufangebots oder Annahme eines bestehenden Verkaufsangebots wird der zu zahlende Kaufpreis so lange auf dem Zahlungskonto reserviert, bis der Kauf abgeschlossen ist. Jener Betrag am Zahlungskonto, der nicht reserviert wurde, steht weiterhin zur freien Verfügung.  War der Kauf erfolgreich, wird der Kaufbetrag auf das Zahlungskonto der Verkäufer:in transferiert. Sollte der Kauf nicht zustande kommen, wird der reservierte Betrag wieder freigegeben.",
                  },
                  {
                    question:
                      "Muss ich Geld auf mein Zahlungskonto einzahlen, bevor ich die Plattform nutzen kann?",
                    answer:
                      "Nein. Die App kann auch ohne Einzahlung genutzt werden, zumal auch alternative Zahlungsmethoden zur Verfügung stehen. ",
                  },
                  {
                    question:
                      "Welche Zahlungsmethoden stehen mir bei einer Investition zur Verfügung?",
                    answer:
                      "Bei einer Investition stehen folgende Zahlungsmethoden zur Verfügung: Zahlungskonto (sofern Guthaben vorhanden ist) Kreditkarte (Visa, Mastercard) Kreditkarte (Visa, Mastercard) Klarna (Sofortüberweisung) Apple Pay ",
                  },
                  {
                    question: "Wo sehe ich meine vergangenen Transaktionen?",
                    answer:
                      "Alle Transaktionen, wie Kauf, Verkauf, erhaltene Ausschüttungen sowie Ein- und Auszahlungen, sind unter dem Menüpunkt “Account” einsehbar.",
                  },
                  {
                    question: "Was ist das Auszahlungskonto?",
                    answer:
                      "Das Auszahlungskonto ist das persönliche Referenzkonto bei der Hausbank, auf das alle Auszahlungen vom Zahlungskonto erfolgen.Das Auszahlungskonto wird bei der erstmaligen Einzahlung auf das Zahlungskonto automatisch festgelegt. ",
                  },
                  {
                    question:
                      "Wieso muss ich Inhaber:in des Auszahlungskontos sein?",
                    answer:
                      "Zur Vermeidung von Geldwäschevorfällen sind Auszahlungen nur auf Konten möglich, die auf den eigenen Namen lauten. ",
                  },
                  {
                    question:
                      "Warum muss ich eine Einzahlung durchführen, um Geld auszahlen zu können?",
                    answer:
                      "Um Geld auszahlen zu können, muss erst ein Referenzkonto hinterlegt werden, auf das ausgezahlt werden kann. Mithilfe einer Einzahlung (mind. 1 Cent) können wir sicherstellen, dass es sich bei dem Referenzkonto um ein auf den eigenen Namen lautendes Girokonto handelt. ",
                  },
                  {
                    question: "Wie kann ich mein Auszahlungskonto ändern?",
                    answer:
                      "Das Auszahlungskonto kann jederzeit mittels Überweisung von dem neuen Auszahlungskonto auf das Zahlungskonto (mind. 1 Cent) und einer kurzen Nachricht an den Support geändert werden.  Alternativ kann auch eine Nachricht zur Änderung des Auszahlungskontos an den Support geschickt werden. Dabei muss aus Sicherheitsgründen ein entsprechender Nachweis übermittelt werden, z.B. ein Foto der Bankomatkarte oder ein Kontoauszug (natürlich können alle Zahlen geschwärzt sein), aus dem der vollständige Name und IBAN zusammen ersichtlich sind.",
                  },
                ])
              }
            >
              <div className="flex items-center space-x-2">
                <FaBuilding className="w-6 h-6 text-gray-600" />
                <span className="text-[16px] font-semibold">Zahlungskonto</span>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </li>
        </ul>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!modalContent}
        onClose={handleCloseModal}
        title={modalContent}
        questions={modalQuestions}
      />
    </div>
  );
};

export default SupportHero;
