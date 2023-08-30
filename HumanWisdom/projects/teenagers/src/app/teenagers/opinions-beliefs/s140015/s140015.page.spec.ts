import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140015Page } from './s140015.page';

describe('S140015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140015Page;
  let fixture: ComponentFixture<S140015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
