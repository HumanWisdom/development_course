import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45004Page } from './s45004.page';

describe('S45004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45004Page;
  let fixture: ComponentFixture<S45004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
