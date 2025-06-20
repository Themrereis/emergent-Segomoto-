#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: "segomoto.online sitesi - 8 firma içeren kurumsal holding websitesi ve e-ticaret platformu"

frontend:
  - task: "Ana Sayfa (HomePage)"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/HomePage.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Ana sayfa oluşturuldu - 8 şirket kartları, hero section, istatistikler ve iletişim bölümü"

  - task: "Sego Moto Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/SegoMoto.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Motor kiralama sayfası - Honda modelleri, fiyatlandırma, iletişim formu"

  - task: "Sego Phone Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/SegoPhone.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Telefon satış sayfası - IMEI hizmetleri, eSIM bölümü, hacker tarzı tasarım"

  - task: "Sego Car Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/SegoCar.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Araç kiralama sayfası - kategoriler, sigorta entegrasyonu"

  - task: "Sego İnşaat Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/SegoInsaat.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "İnşaat sayfası - Akhisar bölge seçimi, iletişim formu, interaktif harita"

  - task: "Becerikli Medikal Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/BecerikliMedikal.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Sağlık sayfası - OSGB hizmetleri, gezici sağlık aracı görseli, tıbbi cihazlar"

  - task: "Becerik Sigorta Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/BecerikSigorta.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Sigorta sayfası - 6 farklı sigorta türü, hızlı teklif formu"

  - task: "Becerik Holding Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/BecerikHolding.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Ana holding sayfası - şirket bilgileri, değerler, yönetim kadrosu"

  - task: "Becerikli E-ticaret Sayfası"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/pages/BecerikliEticaret.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "E-ticaret sayfası - 7 kategori, ürün filtreleme, arama özelliği"

  - task: "Navigasyon Menüsü"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/components/Navbar.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Responsive navbar - 9 sayfa arası geçiş, mobil menü"

  - task: "Footer Bileşeni"
    implemented: true
    working: "unknown"
    file: "/app/frontend/src/components/Footer.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "unknown"
        agent: "main"
        comment: "Footer - şirket linkleri, iletişim bilgileri"

metadata:
  created_by: "main_agent"
  version: "1.0"
  test_sequence: 0
  run_ui: true

test_plan:
  current_focus:
    - "Ana Sayfa (HomePage)"
    - "Navigasyon Menüsü"
    - "Sego Moto Sayfası"
    - "Sego Phone Sayfası"
    - "Sego Car Sayfası"
    - "Sego İnşaat Sayfası"
    - "Becerikli Medikal Sayfası"
    - "Becerik Sigorta Sayfası"
    - "Becerik Holding Sayfası"
    - "Becerikli E-ticaret Sayfası"
    - "Footer Bileşeni"
  stuck_tasks: []
  test_all: true
  test_priority: "high_first"

agent_communication:
  - agent: "main"
    message: "segomoto.online holding websitesi tamamlandı. 8 şirket sayfası, ana sayfa, navigasyon ve footer oluşturuldu. Tüm sayfalar responsive tasarım ile hazırlandı. Frontend test edilmeye hazır."