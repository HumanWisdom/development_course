import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73023Page } from './s73023.page';

describe('S73023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73023Page;
  let fixture: ComponentFixture<S73023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
