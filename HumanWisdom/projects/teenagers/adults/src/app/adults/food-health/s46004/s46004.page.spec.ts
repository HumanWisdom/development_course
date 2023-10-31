import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46004Page } from './s46004.page';

describe('S46004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46004Page;
  let fixture: ComponentFixture<S46004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
