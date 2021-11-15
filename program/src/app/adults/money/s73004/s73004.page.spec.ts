import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73004Page } from './s73004.page';

describe('S73004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73004Page;
  let fixture: ComponentFixture<S73004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
