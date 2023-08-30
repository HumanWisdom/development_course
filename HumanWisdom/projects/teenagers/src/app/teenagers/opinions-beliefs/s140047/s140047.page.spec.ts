import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140047Page } from './s140047.page';

describe('S140047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140047Page;
  let fixture: ComponentFixture<S140047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
