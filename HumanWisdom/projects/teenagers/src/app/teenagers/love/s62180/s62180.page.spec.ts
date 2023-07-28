import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62180Page } from './s62180.page';

describe('S62180Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62180Page;
  let fixture: ComponentFixture<S62180Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62180Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62180Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
