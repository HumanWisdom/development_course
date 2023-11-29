import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132244Page } from './s132244.page';

describe('S132244Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132244Page;
  let fixture: ComponentFixture<S132244Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132244Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132244Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
