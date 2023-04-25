import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106010Page } from './s106010.page';

describe('S106010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106010Page;
  let fixture: ComponentFixture<S106010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
