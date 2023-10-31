import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49004Page } from './s49004.page';

describe('S49004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49004Page;
  let fixture: ComponentFixture<S49004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
