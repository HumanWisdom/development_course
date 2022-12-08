import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61027Page } from './s61027.page';

describe('S61027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61027Page;
  let fixture: ComponentFixture<S61027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
