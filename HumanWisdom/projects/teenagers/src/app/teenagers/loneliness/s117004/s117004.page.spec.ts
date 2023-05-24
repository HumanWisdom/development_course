import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117004Page } from './s117004.page';

describe('S117004Page', () => {
      
    let component:  S117004Page;
  let fixture: ComponentFixture<S117004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
