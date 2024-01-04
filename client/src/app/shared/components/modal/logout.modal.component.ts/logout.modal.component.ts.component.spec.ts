import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogoutModalComponentTsComponent } from './logout.modal.component.ts.component';

describe('LogoutModalComponentTsComponent', () => {
  let component: LogoutModalComponentTsComponent;
  let fixture: ComponentFixture<LogoutModalComponentTsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutModalComponentTsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutModalComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
