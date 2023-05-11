import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106007Page } from './s106007.page';

describe('S106007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106007Page;
  let fixture: ComponentFixture<S106007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
