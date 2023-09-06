import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140023Page } from './s140023.page';

describe('S140023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140023Page;
  let fixture: ComponentFixture<S140023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
