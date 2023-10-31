import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64027Page } from './s64027.page';

describe('S64027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64027Page;
  let fixture: ComponentFixture<S64027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
