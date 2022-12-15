import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18023Page } from './s18023.page';

describe('S18023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18023Page;
  let fixture: ComponentFixture<S18023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
