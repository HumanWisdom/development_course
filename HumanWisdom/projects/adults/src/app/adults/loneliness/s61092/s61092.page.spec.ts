import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61092Page } from './s61092.page';

describe('S61092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61092Page;
  let fixture: ComponentFixture<S61092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
