import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46027Page } from './s46027.page';

describe('S46027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46027Page;
  let fixture: ComponentFixture<S46027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
