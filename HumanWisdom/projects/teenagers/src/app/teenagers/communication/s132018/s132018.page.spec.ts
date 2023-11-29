import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132018Page } from './s132018.page';

describe('S132018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132018Page;
  let fixture: ComponentFixture<S132018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
