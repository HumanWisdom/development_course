import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53004Page } from './s53004.page';

describe('S53004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53004Page;
  let fixture: ComponentFixture<S53004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
