import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132225Page } from './s132225.page';

describe('S132225Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132225Page;
  let fixture: ComponentFixture<S132225Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132225Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132225Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
