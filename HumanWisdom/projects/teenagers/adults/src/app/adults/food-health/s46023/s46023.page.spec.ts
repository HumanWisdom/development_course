import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46023Page } from './s46023.page';

describe('S46023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46023Page;
  let fixture: ComponentFixture<S46023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
