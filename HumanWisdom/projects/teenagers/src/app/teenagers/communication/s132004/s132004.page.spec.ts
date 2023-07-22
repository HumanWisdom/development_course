import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132004Page } from './s132004.page';

describe('S132004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132004Page;
  let fixture: ComponentFixture<S132004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
