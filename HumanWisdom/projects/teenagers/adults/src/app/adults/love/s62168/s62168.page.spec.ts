import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62168Page } from './s62168.page';

describe('S62168Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62168Page;
  let fixture: ComponentFixture<S62168Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62168Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62168Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
