import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55027Page } from './s55027.page';

describe('S55027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55027Page;
  let fixture: ComponentFixture<S55027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
