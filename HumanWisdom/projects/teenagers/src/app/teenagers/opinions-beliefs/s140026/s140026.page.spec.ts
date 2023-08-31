import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140026Page } from './s140026.page';

describe('S140026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140026Page;
  let fixture: ComponentFixture<S140026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
