import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51004Page } from './s51004.page';

describe('S51004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51004Page;
  let fixture: ComponentFixture<S51004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
