import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132173Page } from './s132173.page';

describe('S132173Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132173Page;
  let fixture: ComponentFixture<S132173Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132173Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132173Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
