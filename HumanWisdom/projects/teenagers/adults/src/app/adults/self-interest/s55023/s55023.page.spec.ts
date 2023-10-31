import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55023Page } from './s55023.page';

describe('S55023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55023Page;
  let fixture: ComponentFixture<S55023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
